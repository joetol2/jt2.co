import SubNav from "@/components/SubNav";

const tabs = [
  { to: "/lab", label: "All" },
  { to: "/lab/category/research", label: "Research" },
  { to: "/lab/category/experiments", label: "Experiments" },
  { to: "/lab/category/interactive", label: "Interactive" },
  { to: "/lab/category/prototypes", label: "Prototypes" },
];

const LabNav = ({ current }: { current?: string }) => <SubNav label="Lab" tabs={tabs} current={current} />;

export default LabNav;
