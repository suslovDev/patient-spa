import { useEffect } from "react";
import { useNavigate } from "react-router";


export const useActivePath = (mathPath: string, deps: React.DependencyList = []): void => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(mathPath);
    }, deps);
}