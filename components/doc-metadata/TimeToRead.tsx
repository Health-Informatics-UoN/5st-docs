import { LucideClock } from "lucide-react";
import { FrontMatter } from "nextra";

// conditionally polyfill Temporal for Safari :(
const loadTemporal = async () => {
    if (typeof Temporal === 'undefined') {
        const polyfill = await import('@js-temporal/polyfill');
        window.Temporal = polyfill.Temporal;
    }
};

await loadTemporal();

export function TimeToRead({ metadata }: { metadata?: FrontMatter }) {
    if (metadata?.readingTime == null) return null;

    return (<dl className="flex w-full p-2 gap-2 items-center">
        <dt className="">
            <div className="flex gap-2 font-semibold">
                <LucideClock /> Time to read
            </div>
        </dt>
        <dd>
            {Temporal.Duration.from(metadata.readingTime).toLocaleString()}
        </dd>
    </dl>)
}