  //images
  import ADIMIXTURE from "@/assets/products/Admixture.svg";
  import GROUTS_ANCHORS from "@/assets/products/Grouts.svg";
  import REPAIR_RESTORATION from "@/assets/products/Repairs.svg";
  import WATERPROOFING from "@/assets/products/Waterproofing.svg";
  import FLOORING from "@/assets/products/Flooring.svg";
  import ADHESIVE from "@/assets/products/adhesive.svg";
  import DRY_MIX_MORTARS from "@/assets/products/dry mix.svg";

import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";

export const productsButtons = [
    { label: "All" },
    { label: "FLOORING" },
    { label: "ADMIXTURES" },
    { label: "GROUTS/ANCHORS" },
    { label: "WATERPROOFING" },
    { label: "ADHESIVE/SEALANT" },
    { label: "DRY MIX MORTAR" },
    { label: "REPAIR/RESTORATION" },
  ];


  export const productsImages = [
    { category: "ADMIXTURES", image: ADIMIXTURE, url: "/products/AdmixtureSystems" },
    {
      category: "GROUTS/ANCHORS",
      image: GROUTS_ANCHORS,
      url: "products/GroutsAndAnchors",
    },
    {
      category: "REPAIR/RESTORATION",
      image: REPAIR_RESTORATION,
      url: "/products/RepairsAndRestoration",
    },
    { category: "WATERPROOFING", image: WATERPROOFING, url: "/products/Waterproofing" },
    { category: "FLOORING", image: FLOORING, url: "/products/Flooring" },
    { category: "ADHESIVE/SEALANT", image: ADHESIVE, url: "/products/AdhesiveAndSealant" },
    {
      category: "DRY MIX MORTAR",
      image: DRY_MIX_MORTARS,
      url: "/products/DryMixMortar",
    },
  ];


  export const productsCardsData = [
    {
      icon: VscWorkspaceTrusted,
      text: "We are committed to the highest standards of ethics and integrity, and we are proud to be a trusted partner for our customers, suppliers, and employees.",
    },
    {
      icon: FaRegCheckSquare,
      text: "We are committed to the highest standards of ethics and integrity, and we are proud to be a trusted partner for our customers, suppliers, and employees.",
    },
    {
      icon: FaRegLightbulb,
      text: "We take great pride in our brand and company, inspiring others to feel the same way. Our commitment extends to going above and beyond for both our customers and employees.",
    },
  ];


