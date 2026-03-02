import { useEffect } from "react";
import { useLocation } from "wouter";

export default function NewsDetail() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation("/news");
  }, [setLocation]);

  return null;
}
