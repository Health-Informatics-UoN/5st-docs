type LinksList = {
    title: string;
    href: string;
}[];

type CtaType = {
    text: string;
    href: string;
};
export default function CustomCard({ title, links, description, CTA, icon }: { title: string, description: string, links: LinksList, CTA: CtaType, icon: React.ReactNode }) {
    return (
        <div className="p-4 rounded-md border border-gray-200 h-full flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-2">
                    {icon}
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="text-gray-500 my-2">{description}</p>
                <ul className="px-2">
                    {links.map((link, index) => (
                        <li key={index} className="text-blue-500 hover:text-blue-700 hover:underline list-disc list-inside">
                            <a href={link.href}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <a href={CTA.href} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-5 block text-center hover:bg-blue-600 hover:scale-105 transition-all duration-300 ">{CTA.text}</a>
        </div>
    );
}