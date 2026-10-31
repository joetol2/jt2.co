import SubNav from "@/components/SubNav";
import { categories } from "@/data/content";

const tabs = [
  { to: "/work", label: "All" },
  ...categories.map((c) => ({ to: `/work/category/${c.slug}`, label: c.label })),
  { to: "/work/videos", label: "Videos" },
];

const WorkNav = ({ current }: { current?: string }) => <SubNav label="Work" tabs={tabs} current={current} />;

export default WorkNav;
