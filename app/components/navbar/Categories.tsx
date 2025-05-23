"use client";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This proprety is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This proprety has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This proprety has modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This proprety is in the countryside!",
  },
  {
    label: "Island",
    icon: GiIsland,
    description: "This proprety is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This proprety is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This proprety has skiing activities!",
  },

  {
    label: "Castles",
    icon: GiCastle,
    description: "This proprety is in a castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This proprety has camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This proprety has camping activities!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This proprety is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This proprety is in the desert!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This proprety is luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
    pt-4 
    flex
    flex-row
    items-center
    justify-between
    overflow-x-auto
    "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
