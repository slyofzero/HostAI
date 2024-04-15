import { DeployInstanceButton } from "./DeployInstance";

export function Instances() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-neutral-100">
        Welcome to the Cloud
      </h1>
      <p className="text-neutral-200">
        Get started by deploying your first instance
      </p>

      <DeployInstanceButton />
    </div>
  );
}
