import mailer from './mailer.js'
import crypto from 'crypto';
import { ebidding } from '../config/database.js';

function generateOTP() {
    const min = 100000; 
    const max = 999999;
    const otp = crypto.randomInt(min, max + 1);
    return otp.toString();
}


const createOTP = async (userId)=> {

    const expiryTime = new Date();
    expiryTime.setMinutes(expiryTime.getMinutes() + 5);

    try {
        await ebidding.otpVerifikasi.deleteMany({
            where: {
                userId: userId,
            },
        });
    } catch (error) {
    }
    const OTP = await generateOTP();
    await ebidding.otpVerifikasi.create({
                    data: {
                        userId : userId,
                        code : OTP,
                        expireDate : expiryTime
                    }
                })

    return OTP;
}


const verifikasiRegistrasi = async (userId,email)=> {

    const OTP = await createOTP(userId);

    const Template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Verification - Niterra E-Bidding</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

        <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 30px auto;">
            <tr>
                <td style="padding: 40px; text-align: center;">
                    <img src='https://lokerbumn.com/wp-content/uploads/2023/06/PT-Niterra-Mobility-Indonesia-02.jpg' style='width:200px'  />
                    <h1 style="color: #333333; font-size: 24px; margin-bottom: 20px;">Registration Verification - Niterra E-Bidding</h1>
                    
                    <p style="color: #555555; font-size: 16px; line-height: 1.5;">
                        Thank you for registering. Please use the following verification code (OTP) to complete the registration process:
                    </p>

                    <div style="background-color: #e9f5ff; border: 2px dashed #4a90e2; padding: 20px; margin: 30px 0; border-radius: 4px;">
                        <p style="font-size: 32px; font-weight: bold; color: #4a90e2; margin: 0; letter-spacing: 5px;">
                            ${OTP}
                        </p>
                    </div>

                    <p style="color: #777777; font-size: 14px; margin-top: 20px;">
                        This code is valid for 5 minutes. Do not share this code with anyone.
                    </p>
                    
                    <hr style="border: none; border-top: 1px solid #eeeeee; margin: 30px 0;">
                    
                    <p style="color: #999999; font-size: 12px;">
                        If you did not initiate this Niterra E-Bidding registration, you may disregard this email.
                    </p>

                </td>
            </tr>
        </table>

    </body>
    </html>
    `
    mailer.sendVerificationEmail('Niterra E-Bidding', email, 'Security Alert: Registration Verification Code', Template);
    return true;
}
const verifikasiLogin = async (userId,email)=> {

    const OTP = createOTP(userId);


    const Template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login Verification - Niterra E-Bidding</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">

        <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 30px auto;">
            <tr>
                <td style="padding: 40px; text-align: center;">
                    <img src='https://lokerbumn.com/wp-content/uploads/2023/06/PT-Niterra-Mobility-Indonesia-02.jpg' style='width:180px; margin-bottom: 20px;' alt="Niterra Logo" />
                    
                    <h1 style="color: #333333; font-size: 24px; margin-bottom: 20px;">Login Verification - Niterra E-Bidding</h1>
                    
                    <p style="color: #555555; font-size: 16px; line-height: 1.5;">
                        A login attempt was made on your Niterra E-Bidding account. Use the following <b>One-Time Password (OTP)</b> to proceed:
                    </p>

                    <div style="background-color: #e9f5ff; border: 2px dashed #4a90e2; padding: 20px; margin: 30px 0; border-radius: 4px;">
                        <p style="font-size: 32px; font-weight: bold; color: #4a90e2; margin: 0; letter-spacing: 5px;">
                            ${OTP}
                        </p>
                    </div>

                    <p style="color: #333333; font-size: 15px; font-weight: bold; margin-bottom: 10px; text-align: left;">
                        Login Attempt Details:
                    </p>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; text-align: left; margin-bottom: 20px;">
                        <p style="margin: 5px 0; font-size: 14px; color: #666666;">
                            <span style="font-weight: bold;">Device:</span> ${deviceName}
                        </p>
                        <p style="margin: 5px 0; font-size: 14px; color: #666666;">
                            <span style="font-weight: bold;">IP Address:</span> ${ipAddress}
                        </p>
                    </div>

                    <p style="color: #777777; font-size: 14px; margin-top: 20px;">
                        This code is valid for <b>5 minutes</b>. Do not share this code with anyone.
                    </p>
                    
                    <hr style="border: none; border-top: 1px solid #eeeeee; margin: 30px 0;">
                    
                    <p style="color: #999999; font-size: 12px; line-height: 1.5;">
                        ⚠️ <b>SECURITY ALERT:</b> If you did not attempt this login, <b>immediately</b> change your password and contact Niterra E-Bidding support.
                    </p>

                </td>
            </tr>
        </table>

    </body>
    </html>
    `
    mailer.sendVerificationEmail('Niterra E-Bidding', email, 'Security Alert: Login Verification Code', Template);
    return true;
}

export default {verifikasiLogin,verifikasiRegistrasi}


