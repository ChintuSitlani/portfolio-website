import React from "react";

interface FadeLineProps {
    color?: string;      // line color
    opacity?: number;    // 0 to 1
    thickness?: string;  // e.g., "1px", "2px"
    marginY?: string;    // e.g., "1rem", "2rem"
}

const FadeLine: React.FC<FadeLineProps> = ({
    color = "#ccc",
    opacity = 0.05,
    thickness = "1px",
    marginY = "1rem",
}) => {
    return (
        <hr
            style={{
                border: "none",
                borderTop: `${thickness} solid ${color}`,
                opacity: opacity,
                marginTop: marginY,
                marginBottom: marginY,
            }}
        />
    );
};

export default FadeLine;
