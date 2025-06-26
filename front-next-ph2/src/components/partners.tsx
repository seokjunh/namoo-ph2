import Image from "next/image";

const Partners = () => {
  const partners = [
    {
      name: "ULCHON",
      image: "/image/partner/ulchon.png",
    },
    {
      name: "TXS Robotics",
      image: "/image/partner/txs-robotics.png",
    },
    {
      name: "THIRA",
      image: "/image/partner/thira.png",
    },
    {
      name: "SDTL",
      image: "/image/partner/sdtl.png",
    },
    {
      name: "SDS",
      image: "/image/partner/sds.png",
    },
    {
      name: "SDI",
      image: "/image/partner/sdi.png",
    },
    {
      name: "SCK",
      image: "/image/partner/sck.png",
    },
    {
      name: "Samsung Electro-Mechanics",
      image: "/image/partner/samsung_Electro-Mechanics.png",
    },
    {
      name: "Samsung",
      image: "/image/partner/samsung.png",
    },
    {
      name: "POSCO",
      image: "/image/partner/posco.png",
    },
    {
      name: "Nongshim",
      image: "/image/partner/nongshim.png",
    },
    {
      name: "MOIAF",
      image: "/image/partner/moiaf.png",
    },
    {
      name: "Mitech",
      image: "/image/partner/mitech.png",
    },
    {
      name: "Machbase",
      image: "/image/partner/machbase.png",
    },
    {
      name: "LS Electric",
      image: "/image/partner/ls-electric.png",
    },
    {
      name: "LG",
      image: "/image/partner/lg.png",
    },
    {
      name: "K-Water",
      image: "/image/partner/k-water.png",
    },
    {
      name: "KIA",
      image: "/image/partner/kia.png",
    },
    {
      name: "Innox Lithium",
      image: "/image/partner/innox-lithium.png",
    },
    {
      name: "Hyundai Steel",
      image: "/image/partner/hyundai-steel.png",
    },
    {
      name: "Hyundai",
      image: "/image/partner/hyundai.png",
    },
    {
      name: "Hynix",
      image: "/image/partner/hynix.png",
    },
    {
      name: "Haesung DS",
      image: "/image/partner/haesung-ds.png",
    },
    {
      name: "Dongkuk Steel",
      image: "/image/partner/dongkuk-steel.png",
    },
    {
      name: "Corning",
      image: "/image/partner/corning.png",
    },
    {
      name: "Cisco",
      image: "/image/partner/cisco.png",
    },
    {
      name: "Celltrion",
      image: "/image/partner/celltrion.png",
    },
    {
      name: "Celltrion Pharm",
      image: "/image/partner/ceilltrion-pharm.png",
    },
  ];
  return (
    <div className="box-border overflow-hidden whitespace-nowrap">
      <div className="animate-scroll inline-flex">
        {partners.map((partner, index) => (
          <div key={`${partner.name}-${index}`} className="mx-6 flex-shrink-0">
            <Image
              src={partner.image}
              alt={partner.name}
              width={100}
              height={100}
            />
          </div>
        ))}
        {partners.map((partner, index) => (
          <div key={`${partner.name}-${index}`} className="mx-6">
            <Image
              src={partner.image}
              alt={partner.name}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
    // <div className="box-border overflow-hidden whitespace-nowrap">
    //   <p className="animate-scroll inline-block">
    //     SPACE TRABLE ✦ WELCOME TO SPACE TRABLE WEB ✦ SPACE TRABLE ✦ WELCOME TO
    //     SPACE TRABLE WEB ✦ SPACE TRABLE ✦ WELCOME TO SPACE TRABLE WEB ✦ SPACE
    //     TRABLE ✦ WELCOME TO SPACE TRABLE WEB ✦ SPACE TRABLE ✦ WELCOME TO SPACE
    //     TRABLE WEB ✦ SPACE TRABLE ✦ WELCOME TO SPACE TRABLE WEB ✦ SPACE TRABLE ✦
    //     WELCOME TO SPACE TRABLE WEB ✦ SPACE TRABLE ✦ WELCOME TO SPACE TRABLE WEB
    //     ✦ SPACE TRABLE ✦ WELCOME TO SPACE TRABLE WEB SPACE TRABLE ✦ WELCOME TO
    //     SPACE TRABLE WEB ✦ PACE TRABLE ✦ WELCOME TO SPACE TRABLE WEB SPACE TRABLE ✦ WELCOME TO
    //     SPACE TRABLE WEB ✦ PACE TRABLE ✦ WELCOME TO SPACE TRABLE WEB SPACE TRABLE ✦ WELCOME TO
    //     SPACE TRABLE WEB ✦ PACE TRABLE ✦ WELCOME TO SPACE TRABLE WEB SPACE TRABLE ✦ WELCOME TO
    //     SPACE TRABLE WEB ✦
    //   </p>
    // </div>
  );
};

export default Partners;
