import { SnackbarNotification } from "@hellofresh/scm-design-system";
import { FC, useState } from "react";

type SnackbarVariants = "error" | "warning" | "success" | "info" | "neutral";
export type NotificationProps = {
  title: string;
  message?: string;
  open: boolean;
  delay?: number;
  severity: SnackbarVariants;
  icon?: FC;
  onClose?: () => void;
  actionOnClick?: () => void;
};

export function Notification({
  title,
  message,
  open,
  delay = 3000,
  icon,
  severity,
}: NotificationProps) {
  const [isOpen, setIsOpen] = useState(open);
  const id = Date.now().toString();

  return open ? (
    <SnackbarNotification
      id={id}
      open={isOpen}
      message={title}
      subText={message}
      icon={icon}
      delay={delay}
      onClose={() => {
        setIsOpen(false);
        return console.log("Notification Closed");
      }}
      severity={severity}
    />
  ) : null;
}
