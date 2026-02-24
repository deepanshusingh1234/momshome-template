"use client";

import { useEffect, useState } from "react";

interface MainLoginProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
}

// Static user data for demo
const VALID_CREDENTIALS = {
    email: "user@example.com",
    password: "password123"
};

export default function MainLogin({
    isOpen,
    onClose,
    onSuccess,
}: MainLoginProps) {
    const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    // Signup form fields
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notify, setNotify] = useState(true);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError("");

        // Basic validation
        if (!loginEmail || !loginPassword) {
            setLoginError("Please enter both email and password");
            return;
        }

        setLoading(true);

        // Check against static credentials
        setTimeout(() => {
            if (loginEmail === VALID_CREDENTIALS.email && loginPassword === VALID_CREDENTIALS.password) {
                setLoading(false);
                onSuccess?.();
                onClose();
                // Reset form
                setLoginEmail("");
                setLoginPassword("");
            } else {
                setLoading(false);
                setLoginError("Invalid email or password");
            }
        }, 1000);
    };

    const handleSignupSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate signup form
        if (!fullName || !email || !mobile || !password || !confirmPassword || mobile.length !== 10) return;
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onSuccess?.();
            onClose();
            // Reset all fields
            setFullName("");
            setEmail("");
            setMobile("");
            setPassword("");
            setConfirmPassword("");
            setNotify(true);
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* Modal - Fully responsive */}
            <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-white flex flex-col md:flex-row">
                {/* CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
                >
                    ✕
                </button>

                {/* LEFT PANEL - Purple gradient */}
                <div className="w-full md:w-3/5 p-6 sm:p-8 lg:p-12 text-center bg-gradient-to-b from-[#7b728c] via-[#b9add9] to-[#eadcff] flex flex-col items-center justify-between">
                    {/* Logos */}
                    <div className="flex items-center justify-center gap-2 sm:gap-4">
                        <img
                            src="https://assets.gokwik.co/uploads/1750076768186_momshome logo.png"
                            alt="MomsHome"
                            className="h-16 sm:h-20 lg:h-28"
                        />
                        <span className="text-xs text-black/70 font-medium">
                            Powered by <span className="font-bold">KwikPass</span>
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-xl sm:text-2xl font-bold text-black my-4 sm:my-6">
                        {activeTab === "login" ? "Login to avail best offers!" : "Join us for best offers!"}
                    </h2>

                    {/* Feature Cards - Hidden on mobile, visible on tablet/desktop */}
                    <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-full max-w-2xl mx-auto">
                        {[
                            {
                                title: "Customer-first",
                                desc: "Putting you in the center",
                            },
                            {
                                title: "Transparent",
                                desc: "Honest from the inside out",
                            },
                            {
                                title: "Innovative",
                                desc: "Getting the absolute best for you",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-xl border border-black/20 bg-[#d6cbee] p-4 sm:p-5 shadow-sm"
                            >
                                <div className="text-2xl mb-2 sm:mb-3">⭐</div>
                                <h3 className="font-semibold text-xs sm:text-sm mb-1">{item.title}</h3>
                                <p className="text-xs text-black/60 leading-tight">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Demo Credentials Info - Only show on login tab */}
                    {activeTab === "login" && (
                        <div className="hidden sm:block text-xs text-black/60 mt-4 p-3 bg-white/30 rounded-lg">
                            <p className="font-medium mb-1">Demo Credentials:</p>
                            <p>Email: user@example.com</p>
                            <p>Password: password123</p>
                        </div>
                    )}

                    {/* Empty div for spacing - hidden on mobile */}
                    <div className="hidden sm:block"></div>
                </div>

                {/* RIGHT PANEL - White */}
                <div className="w-full md:w-2/5 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white">
                    {/* Tab Switcher */}
                    <div className="flex mb-6 sm:mb-8 border-b border-gray-200">
                        <button
                            className={`flex-1 pb-3 text-sm sm:text-base font-medium transition-colors ${activeTab === "login"
                                ? "text-[#b39ddb] border-b-2 border-[#b39ddb]"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                            onClick={() => {
                                setActiveTab("login");
                                setLoginError("");
                            }}
                        >
                            Login
                        </button>
                        <button
                            className={`flex-1 pb-3 text-sm sm:text-base font-medium transition-colors ${activeTab === "signup"
                                ? "text-[#b39ddb] border-b-2 border-[#b39ddb]"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                            onClick={() => setActiveTab("signup")}
                        >
                            Sign Up
                        </button>
                    </div>

                    {activeTab === "login" ? (
                        /* LOGIN FORM - Email & Password */
                        <form onSubmit={handleLoginSubmit} className="space-y-4 sm:space-y-5">
                            {/* Email Input */}
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg outline-none text-sm focus:border-[#b39ddb] focus:ring-2 focus:ring-[#b39ddb] focus:ring-opacity-20"
                                    value={loginEmail}
                                    onChange={(e) => {
                                        setLoginEmail(e.target.value);
                                        setLoginError("");
                                    }}
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg outline-none text-sm focus:border-[#b39ddb] focus:ring-2 focus:ring-[#b39ddb] focus:ring-opacity-20"
                                    value={loginPassword}
                                    onChange={(e) => {
                                        setLoginPassword(e.target.value);
                                        setLoginError("");
                                    }}
                                    required
                                />
                            </div>

                            {/* Error Message */}
                            {loginError && (
                                <p className="text-xs text-red-500 text-center">
                                    {loginError}
                                </p>
                            )}

                            {/* Forgot Password Link */}
                            <div className="text-right">
                                <button
                                    type="button"
                                    className="text-xs text-[#b39ddb] hover:underline"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={!loginEmail || !loginPassword || loading}
                                className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold text-sm transition-all ${loginEmail && loginPassword
                                    ? "bg-[#b39ddb] hover:bg-[#a58bc9] text-white shadow-md"
                                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>

                            {/* OR Divider */}
                            <div className="relative my-3 sm:my-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-xs">
                                    <span className="px-2 bg-white text-gray-400">OR</span>
                                </div>
                            </div>

                            {/* Signup Link */}
                            <p className="text-xs text-center text-gray-500">
                                Don't have an account?{" "}
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("signup")}
                                    className="text-[#b39ddb] hover:underline font-medium"
                                >
                                    Sign up
                                </button>
                            </p>

                            {/* Demo Credentials for Mobile */}
                            <div className="sm:hidden text-xs text-gray-500 text-center mt-4 p-2 bg-gray-50 rounded">
                                <p className="font-medium mb-1">Demo:</p>
                                <p>user@example.com / password123</p>
                            </div>
                        </form>
                    ) : (
                        /* SIGNUP FORM */
                        <form onSubmit={handleSignupSubmit} className="space-y-4">
                            {/* Full Name */}
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg outline-none text-sm focus:border-[#b39ddb] focus:ring-2 focus:ring-[#b39ddb] focus:ring-opacity-20"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg outline-none text-sm focus:border-[#b39ddb] focus:ring-2 focus:ring-[#b39ddb] focus:ring-opacity-20"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
                                    <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 border-r bg-gray-50">
                                        <img
                                            src="https://flagcdn.com/w20/in.png"
                                            className="w-4 h-4 sm:w-5 sm:h-5"
                                            alt="IN"
                                        />
                                        <span className="text-xs sm:text-sm font-medium">+91</span>
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="Enter Mobile Number"
                                        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 outline-none text-sm"
                                        maxLength={10}
                                        value={mobile}
                                        onChange={(e) =>
                                            setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg outline-none text-sm focus:border-[#b39ddb] focus:ring-2 focus:ring-[#b39ddb] focus:ring-opacity-20"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg outline-none text-sm focus:border-[#b39ddb] focus:ring-2 focus:ring-[#b39ddb] focus:ring-opacity-20"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                {password && confirmPassword && password !== confirmPassword && (
                                    <p className="text-xs text-red-500 mt-1">Passwords don't match</p>
                                )}
                            </div>

                            {/* Notify Checkbox */}
                            <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={notify}
                                    onChange={(e) => setNotify(e.target.checked)}
                                    className="w-4 h-4 accent-[#b39ddb] rounded"
                                />
                                <span className="text-xs sm:text-sm">Notify me with offers & updates</span>
                            </label>

                            {/* Terms Agreement */}
                            <p className="text-xs text-gray-500 leading-relaxed">
                                By signing up, you agree to our{" "}
                                <a
                                    href="https://www.gokwik.co/terms"
                                    target="_blank"
                                    className="text-[#b39ddb] hover:underline font-medium"
                                >
                                    Terms & Conditions
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://www.gokwik.co/data-policy"
                                    target="_blank"
                                    className="text-[#b39ddb] hover:underline font-medium"
                                >
                                    Privacy Policy
                                </a>
                                .
                            </p>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={!fullName || !email || !mobile || mobile.length !== 10 || !password || !confirmPassword || password !== confirmPassword || loading}
                                className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold text-sm transition-all ${fullName && email && mobile.length === 10 && password && confirmPassword && password === confirmPassword
                                    ? "bg-[#b39ddb] hover:bg-[#a58bc9] text-white shadow-md"
                                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>

                            {/* Login Link */}
                            <p className="text-xs text-center text-gray-500">
                                Already have an account?{" "}
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("login")}
                                    className="text-[#b39ddb] hover:underline font-medium"
                                >
                                    Login
                                </button>
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}