import FadeLine from "../Line/FadedLine";
import SpinningAsterisk from "../SpinningAsterisk/SpinningAsterisk";
type HeadingWithSpinningSVGProps = {
    headingName: string;
};

export default function HeadingWithSpinningSVG({ headingName }: HeadingWithSpinningSVGProps) {
    return (
        <>
            <div className="flex items-center">
                <div className="flex justify-center">
                    <SpinningAsterisk />
                </div>
                <div className="text-xl p-2">
                    {headingName}
                </div>
            </div>
            <FadeLine opacity={0.2} thickness="2px" />
        </>
    );
}
