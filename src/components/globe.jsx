import IconCloud from "./ui/icon-cloud";

const slugs = [
  "python",
  "r",
  "mysql",
  "pandas",
  "numpy",
  "scikitlearn",
  "claude",
  "n8n",
  "airtable",
  "googleappsscript",
  "databricks",
  "sap",
  "github",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;