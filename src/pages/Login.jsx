import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // contoh password benar (nanti diganti validasi backend)
  const correctEmail = "user@example.com";
  const correctPassword = "password123";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // cek apakah email & password cocok
    if (email === correctEmail && password === correctPassword) {
      setError(false);
      console.log("✅ Login success!");
    } else {
      setError(true); // password tidak sesuai
      console.log("❌ Password salah");
    }
  };

  return (
    <section className="min-h-screen grid md:grid-cols-2 md:gap-x-[80px] bg-[hsl(var(--background))] font-sans">
      {/* LEFT FORM */}
      <div className="flex items-center justify-center px-6 md:pl-[80px] md:pr-0">
        <div className="w-full max-w-md animate-[fade-in_0.8s_ease-out_forwards] text-left">
          <h2 className="text-4xl font-bold mb-2 text-foreground font-[var(--font-subheader)]">
            Welcome Back
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            Log in to access your account and explore properties.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="w-full border border-border rounded-md px-4 py-2 text-sm bg-card text-foreground shadow-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1 text-foreground">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className={`w-full pr-10 border rounded-md px-4 py-2 text-sm bg-card text-foreground shadow-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-offset-2 ${
                    submitted && error
                      ? "border-red-500 focus:ring-red-500"
                      : "border-border focus:ring-primary"
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 opacity-50 hover:opacity-100 transition-opacity duration-200"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Pesan error hanya muncul jika login salah */}
              {submitted && error && (
                <p className="text-sm text-red-500 mt-2">
                  Incorrect email or password.
                </p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm text-foreground">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-primary w-4 h-4 rounded-sm"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-primary hover:underline hover:opacity-90 transition"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-md font-medium text-primary-foreground bg-gradient-to-r from-primary to-blue-600 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Log In
            </button>
          </form>

          {/* Social Buttons */}
          <div className="flex items-center my-8">
            <hr className="flex-1 border-border" />
            <span className="px-3 text-sm text-gray-500 dark:text-gray-400">
              or continue with
            </span>
            <hr className="flex-1 border-border" />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              type="button"
              className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-200 active:scale-[0.98]"
            >
              <FcGoogle className="text-xl" /> Log in with Google
            </button>

            <button
              type="button"
              className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-200 active:scale-[0.98]"
            >
              <FaApple className="text-xl" /> Log in with Apple
            </button>
          </div>

          <p className="text-sm text-foreground mt-6">
            No account yet?{" "}
            <Link to="/SignUp" className="text-primary hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden md:block">
        <img
          src="/images/hero-bg.jpg"
          alt="Login background"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
