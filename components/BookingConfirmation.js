import Image from "next/image";

export default function BookingConfirmation() {
  return (
    <div className="relative bg-gradient-to-b from-black to-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg2.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row  items-center justify-center px-6 lg:px-24 py-12">
        {/* Text Container */}
        <div className="max-w-lg min-w-1/3 text-center  lg:text-left">
          {/* Company Logo and Name */}
          <h1 className="text-sm md:text-xl z-10 text-white font-semibold uppercase">
            YT - Growth Secrets Private Limited
          </h1>

          {/* Booking Confirmation Title */}
          <h2 className="mt-6 text-4xl md:text-6xl z-10 font-bold text-white">
            BOOKING CONFIRMATION!!
          </h2>

          {/* Description */}
          <p className="mt-4 text-white text-md z-10 md:text-xl">
            Your booking has been received! ✅ <br />
            However, to finalize your appointment, please check your email 📩
            (or WhatsApp) for a confirmation message. 💪
          </p>
        </div>

        <div className=" relative md:mt-0  mt-32 w-full flex items-center justify-end md:justify-end">
          <div className="absolute right-32 z-0  hidden md:block">
            <Image
              src="/images/2.png"
              alt="Decorative Background"
              width={600}
              height={600}
              className="rounded-full    "
            />
          </div>
          <div className="absolute  z-0  block md:hidden">
            <Image
              src="/images/2.png"
              alt="Decorative Background"
              width={700}
              height={700}
              className="rounded-full    "
            />
          </div>

          {/* Profile Image */}
          <Image
            src="/images/1.png"
            alt="Profile Image"
            width={350}
            height={350}
            className="rounded-full z-10 hidden md:block "
          />
          <Image
            src="/images/1.png"
            alt="Profile Image"
            width={200}
            height={200}
            className=" rounded-full z-10 block md:hidden "
          />
        </div>
      </div>
    </div>
  );
}
