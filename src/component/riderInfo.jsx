import React from "react";

const RiderInfo = () => {
  return (
    <section
      className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20"
      style={{
        background: "linear-gradient(to bottom, #EEEEEE 33%, #A6A6A6 98%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="font-nunito font-extrabold text-[32px] text-black text-left mb-6"
          style={{ lineHeight: "71px" }}
        >
          What is Quickcart?
        </h2>

        {/* Paragraph */}
        <p
          className="font-nunito font-semibold text-[24px] text-black text-left"
          style={{ lineHeight: "144.5%" }}
        >
          QuickCart is a modern delivery company designed to make logistics
          fast, easy, and dependable for everyone. We help individuals and
          businesses send and receive packages without stress, offering
          real-time tracking, flexible delivery options, and professional riders
          who ensure every item arrives safely and on time. Powered by smart
          technology, QuickCart connects senders and receivers seamlessly,
          whether it's same-day delivery across town or bulk shipments for
          growing businesses. At its core, QuickCart is more than just a courier
          service. it's a trusted partner built to keep your world moving
          quickly and efficiently.
        </p>
      </div>
    </section>
  );
};

export default RiderInfo;
