import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "test@email.com" && password === "test@123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/menu");
    } else {
      setMessage("Invalid email or password ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div
        className={`w-full max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8 animate-fade-in-up ${
          message ? "animate-shake" : ""
        }`}
      >
        <div className="text-center mb-8">
          <div className="text-5xl mb-2">🍽️</div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-green-600">
            Foodies
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-2 italic">
            “Good food is the foundation of genuine happiness.”
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
          Login to continue your delicious journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="test@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:scale-[1.01]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="test@123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:scale-[1.01]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold py-2 rounded-xl transition-all duration-200"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center font-medium text-red-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
