import { useMutation } from "@tanstack/react-query";
import { login } from "../../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { BiSolidError } from "react-icons/bi";

export default function useLogin() {
  const navigate = useNavigate();
  const loginFnDetails = useMutation({
    mutationKey: ["currentLoggedInUser"],
    mutationFn: ({ email, password }) => login({ email, password }),
    onError: () =>
      toast("Incorrect username or password", {
        style: {
          color: "red",
        },
      }),
    onSuccess: (loginInUser) => {
      navigate("/dashboard");
    },
  });

  return loginFnDetails;
}
