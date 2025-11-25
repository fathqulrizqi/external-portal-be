import authService from '../service/authService.js';


const register = async (req, res, next) => {
  try {
    const payload = {
      email: req.body.email?.trim().toLowerCase() || null,
      password: req.body.password || null,
      passwordConfirm : req.body.passwordConfirm || null,
      urlImage : '/public/images/profile/default.jpg',
      fullName: req.body.fullName || null,
    };
    await authService.register(payload);
    res.status(200).json({
      message: "Your account has been successfully created. Please wait 1-3 days for verification from our team.",
      status: "Success",
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const payload = {
      email: req.body.email?.trim().toLowerCase() || "",
      password: req.body.password || "",
    };

    const requestContext = {
      ip: req.ip,
      userAgent: req.headers['user-agent']
    };
    const { token, role, access } = await authService.login(payload, requestContext);

    const expiresInString = process.env.JWT_EXPIRES_IN || '1d';
    const days = parseInt(expiresInString.replace('d', ''));
    const maxAgeInMs = days * 24 * 60 * 60 * 1000;

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: maxAgeInMs,
      sameSite: 'strict', 
    });

    res.status(200).json({
      status: 'Success',
      message: 'Login successful',
      data: {
        role: role,
        access: access,
      },
    })
  } catch (e) {
    next(e);
  }
};

const otpSending = async (req, res, next) => {
  try {
    const userId = req.user.userId; 
    const email = req.user.email;
    await authService.otpSending(userId,email);
    res.status(200).json({
      message: "OTP Berhasil Di kirim",
      status: "Success",
    });
  } catch (e) {
    next(e);
  }
};

const otpVerification = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const otp = req.body.otp;
    const result = await authService.otpVerification(userId, otp);
    res.status(200).json({
      message: result,
      status: "Success",
    });
  } catch (e) {
    next(e);
  }
};
const otpRegistrationVerification = async (req, res, next) => {
  try {
    console.log(req.user);
    const userId = req.user.userId;
    const otp = req.body.otp;
    const result = await authService.otpRegistrationVerification(userId, otp);
    res.status(200).json({
      message: result,
      status: "Success",
    });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            res.clearCookie('jwt', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
            });
            return res.status(200).json({
                status: 'Success',
                message: 'Logout successful'
            });
        }
        
        await authService.logout(token);

        res.clearCookie('jwt', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        res.status(200).json({
            status: 'Success',
            message: 'Logout successful',
        });
    } catch (e) {
        next(e);
    }
};

export default {
    register,
    login,
    otpSending,
    otpVerification,
    otpRegistrationVerification,
    logout
}