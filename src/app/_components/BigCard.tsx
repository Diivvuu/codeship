import Image from "next/image";

interface BigCardProps {
  icon: string;
  heading: string;
  content: string;
}
function BigCard({ icon, heading, content }: BigCardProps) {
  return (
    <div className="w-full min-h-80 max-w-[36rem] rounded-xl shadow-custom-shadow flex px-9 py-8 flex-col items-start justify-center gap-y-3">
      <div>
        <Image width={50} height={60} src={icon} alt="icon" />
      </div>
      <div className="text-2xl font-semibold">{heading}</div>
      <div className="text-wrap text-[#737373]">{content}</div>
      <p className="text-[#504CA0]">Read More </p>
    </div>
  );
}

export default BigCard;
