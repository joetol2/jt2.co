import SubNav from "@/components/SubNav";
import { employers } from "@/data/experience";

const short: Record<string, string> = {
  agency: "Creative agency",
  independent: "Independent",
  wbd: "Discovery / WBD",
  fox: "FOX",
  nbcu: "NBCUniversal",
  citigroup: "Citigroup",
  early: "On2 & early",
};

const tabs = [
  { to: "/work", label: "All" },
  ...employers.map((e) => ({ to: `/work/at/${e.slug}`, label: short[e.slug] ?? e.name })),
  { to: "/work/videos", label: "Videos" },
];

const WorkNav = ({ current }: { current?: string }) => <SubNav label="Work" tabs={tabs} current={current} />;

export default WorkNav;
