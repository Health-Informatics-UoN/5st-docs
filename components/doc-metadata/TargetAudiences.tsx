import { LucideUsers } from "lucide-react";
import { FrontMatter } from "nextra";
import { Badge } from "@/components/Badge";

type BadgeSpec = {
    label: string;
    colors?: string;
}

const audienceBadges: { [k: string]: BadgeSpec } = {
    "tre-operator": { label: "TRE Operator", colors: "bg-blue-200 text-blue-700" },
    "federation-operator": { label: "Federation Operator", colors: "bg-orange-200 text-orange-700" },
    "researcher": { label: "Researcher", colors: "bg-purple-200 text-purple-700" },
    "integrator": { label: "Integrator", colors: "bg-green-200 text-green-700" },
    "contributor": { label: "Contributor", colors: "bg-red-200 text-red-700" }
}

export function TargetAudiences({ metadata }: { metadata?: FrontMatter }) {
    if (metadata?.audiences == null) return null;

    // standardise to a string array, or bail if impossible
    let { audiences } = metadata;
    if (typeof audiences === "string") audiences = [audiences]
    if (!Array.isArray(audiences)) return null;

    // map valid keys only to badge specs
    audiences = audiences.reduce((a, v) => {
        const badge = audienceBadges[v];
        return badge == null ? a : [...a, badge];
    }, []);

    // Leave if we didn't have any valid keys
    if(audiences.length < 1) return null

    return (<dl className="flex w-full p-2 gap-2">
        <dt className="">
            <div className="flex gap-2 font-semibold items-center">
                <LucideUsers /> Target Audience{audiences.length > 1 && "s"}
            </div>
        </dt>

        <div className="flex flex-wrap gap-2">
            {audiences.map(({ label, colors }: BadgeSpec) => {
                if (label == null) return null

                return <dd>
                    <Badge className={colors ?? ""}>
                        {label}
                    </Badge>
                </dd>
            })}
        </div>
    </dl>)
}