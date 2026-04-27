import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

type Service = {
    icon: string;
    title: string;
    description: string;
};

type Project = {
    category: string;
    title: string;
    location: string;
    image: string;
    alt: string;
};

const services: Service[] = [
    {
        icon: 'construction',
        title: 'Konstruksi Bangunan',
        description:
            'Pengerjaan struktur bangunan dengan standar keamanan tinggi dan material kualitas premium.',
    },
    {
        icon: 'architecture',
        title: 'Desain Arsitektur',
        description:
            'Menciptakan desain estetis yang fungsional, memadukan modernitas dengan efisiensi ruang.',
    },
    {
        icon: 'assignment',
        title: 'Manajemen Proyek',
        description:
            'Pengawasan menyeluruh untuk memastikan proyek selesai tepat waktu dan sesuai anggaran.',
    },
];

const projects: Project[] = [
    {
        category: 'RESIDENTIAL',
        title: 'The Skyline Residences',
        location: 'Jakarta Selatan',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaQIdFkcb0urujTTKD83V4EQIeSl1G8jrAv9lgnnbvvSD0vXwxqdCb4cfWh107DGkPG3hSQoUZcCOlhAsf-Fe5P8XN3wPFf08U6zdr995ZxM8gVYchnQ2BTjs0UjT0bIgRzUI4pGTcXi0OxVXU7C8AtXMDfpHxDM1bSZofq63ujV052XogH0tSjeY1tSy4osEjI52GOSvQguUrWjhHWy3a1h0FNaDDFIT1BYUeDlFTLRNhVe0HCh0lb43SdW5ys-uC7bHFmw0BpKg',
        alt: 'Luxury apartment complex',
    },
    {
        category: 'COMMERCIAL',
        title: 'DSL Corporate Hub',
        location: 'Surabaya Pusat',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2NYdrYGLT9IpOF5hPdPjTnY-pY6c7R71lc4oVGSeT3eh3OJ0wWMjUoy2TNYElQp5jaT_V1jY-CIxmpRyr2JfQUnL990FJZMy4612EFZUs2N02-ARjJGLR3-nIvEIS4s6Vzdj9nqs_x4eOPkRO6X-HXAIfmnqrvjm8D-BsaMOCcj6rD_BvkxDkg23kKVZIASWxJwiKMfJCteeAR9Sr6P72p-d74kphImb7v-AOOhNAL71bcjwTC8Zy3-zEp_CuCyhsG-RdDsLkgqI',
        alt: 'Modern office interior',
    },
    {
        category: 'HOSPITALITY',
        title: 'Emerald Coast Villa',
        location: 'Uluwatu, Bali',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi5_Vu-_jWjrJINLiD3nZMbJT3RyNFVdqFK2yosWn9skf4MdHuhPk0GmrJMiIzBIuyRDjVOnj9nXaS-YyMqF5j5lq8dG0EMLW4h14gDn-jtkTlRHbGSNWepoA4ueZS15zn8Sma93gHCclSa_nqQmhtjZ2z2uBYpm9SjefcWPrF09XG6mBk5JPySr27LL0_UIaPchTWJmOacPfyDKLQQJXNyTQlzEg5dmvVRwQsUCfl25KAM3e7RI3mlrkye9g5D37TxyXwiJpAj4s',
        alt: 'Luxury villa exterior',
    },
];

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props as { auth: { user?: { id: number } } };

    return (
        <>
            <Head title="DSL Property Development">
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Work+Sans:wght@600;700;900&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                />
            </Head>

            <div className="overflow-x-hidden bg-[#fcf9f8] text-[#1c1b1b] [font-family:Inter,sans-serif]">
                <style>{`
                    .material-symbols-outlined {
                        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                    }

                    .structural-grid {
                        background-image:
                            linear-gradient(to right, rgba(46, 49, 146, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(46, 49, 146, 0.05) 1px, transparent 1px);
                        background-size: 40px 40px;
                    }

                    .headline-font {
                        font-family: 'Work Sans', sans-serif;
                    }
                `}</style>

                <nav className="fixed top-0 z-50 w-full border-b border-blue-900/10 bg-white/95 shadow-sm backdrop-blur-sm">
                    <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
                        <div className="headline-font text-2xl font-black tracking-tight uppercase">
                            <span className="text-[#2E3192]">D</span>
                            <span className="text-[#2dbcfe]">S</span>
                            <span className="text-[#F3921F]">L</span>{' '}
                            <span className="text-[#F3921F]">Property</span>
                        </div>

                        <div className="hidden items-center space-x-8 md:flex">
                            <a
                                href="#"
                                className="headline-font border-b-2 border-orange-500 pb-1 text-sm font-semibold tracking-wider text-orange-500 uppercase"
                            >
                                Home
                            </a>
                            {['Projects', 'Services', 'About Us', 'Contact'].map(
                                (item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="headline-font text-sm font-semibold tracking-wider text-blue-900 uppercase transition-colors hover:text-orange-500"
                                    >
                                        {item}
                                    </a>
                                ),
                            )}
                        </div>

                        <div className="flex items-center gap-2 md:gap-3">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="rounded-sm border border-blue-900/20 px-3 py-2 text-xs font-semibold tracking-wider text-blue-900 uppercase md:px-4"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="rounded-sm border border-blue-900/20 px-3 py-2 text-xs font-semibold tracking-wider text-blue-900 uppercase md:px-4"
                                    >
                                        Login
                                    </Link>
                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className="hidden rounded-sm border border-blue-900/20 px-4 py-2 text-xs font-semibold tracking-wider text-blue-900 uppercase md:inline-block"
                                        >
                                            Register
                                        </Link>
                                    )}
                                </>
                            )}
                            <button className="scale-95 bg-[#f5921c] px-4 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase transition-all duration-300 active:scale-90 md:px-6 md:py-3">
                                Inquire Now
                            </button>
                        </div>
                    </div>
                </nav>

                <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDbuY2O8-ULmgV2gfUpc5bnruxif1YFbXmF-WOmrO5-2sPT5r7j5GfB3yJaLBxXXyM92HvWQRi7PTguC9Wf6BLGz8RwptkysPBInwgaxqbIh_ejJpvZ7zFwA5vCUhHMgrDX0RJDQDikyjrw3UCyJBVgMM6g2tAT_f81JVUy9wjk0XN-FA0j2LHD7iShepjElRabGgLPLKDEfJUrflKNnAExvjP04yzh7fpAiBkb1ru8HiSfju7f4vVaiEuqrryrclkUI2EinSv7e8"
                            alt="Modern architectural building"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#15157d]/45" />
                    </div>

                    <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-12 gap-8 px-6">
                        <div className="col-span-12 md:col-span-8 lg:col-span-7">
                            <div className="mb-8 h-1 w-16 bg-[#f5921c]" />
                            <h1 className="headline-font mb-6 text-4xl leading-tight font-bold text-white md:text-6xl">
                                Membangun Masa Depan dengan Integritas
                            </h1>
                            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/90">
                                Kami menghadirkan solusi konstruksi dan
                                pengembangan properti yang presisi untuk
                                kebutuhan hunian eksklusif dan komersial
                                berskala besar.
                            </p>
                            <div className="flex flex-col gap-6 sm:flex-row">
                                <button className="bg-[#f5921c] px-8 py-4 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-all hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                                    Lihat Proyek Kami
                                </button>
                                <button className="border border-white px-8 py-4 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-all hover:bg-white hover:text-[#15157d]">
                                    Konsultasi Gratis
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute right-0 bottom-0 hidden p-10 lg:block">
                        <div className="grid grid-cols-3 gap-2 opacity-30">
                            <div className="h-20 w-20 border border-white" />
                            <div className="h-20 w-20 border border-white" />
                            <div className="h-20 w-20 bg-[#f5921c]" />
                            <div className="h-20 w-20 border border-white" />
                            <div className="h-20 w-20 border border-white" />
                            <div className="h-20 w-20 border border-white" />
                        </div>
                    </div>
                </section>

                <section className="structural-grid py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-20 flex flex-col items-center">
                            <span className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#f5921c] uppercase">
                                What We Do
                            </span>
                            <h2 className="headline-font text-center text-4xl font-bold text-[#15157d]">
                                Layanan Profesional Kami
                            </h2>
                            <div className="mt-6 h-1 w-12 bg-[#15157d]" />
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="group border border-[#15157d]/10 bg-white p-12 transition-colors hover:border-[#f5921c]"
                                >
                                    <div className="mb-8 flex h-16 w-16 items-center justify-center bg-[#f6f3f2] transition-colors group-hover:bg-[#f5921c]">
                                        <span className="material-symbols-outlined text-3xl text-[#15157d] group-hover:text-white">
                                            {service.icon}
                                        </span>
                                    </div>
                                    <h3 className="headline-font mb-4 text-2xl font-semibold text-[#15157d]">
                                        {service.title}
                                    </h3>
                                    <p className="mb-6 leading-relaxed text-[#464652]">
                                        {service.description}
                                    </p>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 text-sm font-semibold text-[#f5921c]"
                                    >
                                        PELAJARI LEBIH LANJUT
                                        <span className="material-symbols-outlined text-sm">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-[#f6f3f2] py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mb-20 flex items-end justify-between">
                            <div>
                                <span className="mb-4 block text-xs font-semibold tracking-[0.3em] text-[#f5921c] uppercase">
                                    Portfolio
                                </span>
                                <h2 className="headline-font text-4xl font-bold text-[#15157d]">
                                    Proyek Unggulan Kami
                                </h2>
                            </div>
                            <button className="hidden border-b-2 border-[#15157d] pb-1 text-sm font-semibold text-[#15157d] transition-colors hover:border-[#f5921c] hover:text-[#f5921c] md:block">
                                LIHAT SEMUA PROYEK
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <div
                                    key={project.title}
                                    className="group relative overflow-hidden bg-white shadow-sm"
                                >
                                    <div className="aspect-[4/5] overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.alt}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute top-0 left-0 h-1 w-full bg-[#2dbcfe]" />
                                    <div className="p-6">
                                        <span className="text-xs font-semibold text-[#f5921c]">
                                            {project.category}
                                        </span>
                                        <h4 className="headline-font mt-2 text-2xl font-semibold text-[#15157d]">
                                            {project.title}
                                        </h4>
                                        <div className="mt-4 flex items-center gap-2 text-[#464652]">
                                            <span className="material-symbols-outlined text-sm">
                                                location_on
                                            </span>
                                            <span className="text-sm font-semibold">
                                                {project.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="overflow-hidden py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 z-0 h-40 w-40 border-t-4 border-l-4 border-[#f5921c] opacity-20" />
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGMrO7dEpS3pQG4S0IycHDHk5iNMpjYJIib0nW4VKBTgIsFJbh6HJRNC1XSkgDF52E-FDCOsYnzGvm6pOr0WL9jnrOP4yWJAeawa0FIhatQAJI8uYpgTGLX8cv-6NFAq_ScnHoMELaqT8iMWXzhlJ-8zWb6VMGK5Aej0A2Gzvw3YO45siiNR5wbOsZ8llP5u2wqnmpBpN4TSIh1Z0Ir8hxXKWhvsU_Uq53_ktIXOxL2r3bAE8BGePbrDhcZ2VAR2isHdN-6BO1Yvk"
                                    alt="Architectural drafting"
                                    className="relative z-10 h-[500px] w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                                />
                                <div className="absolute -right-6 -bottom-6 z-20 bg-[#15157d] p-12 text-white">
                                    <span className="headline-font block text-5xl font-black">
                                        15+
                                    </span>
                                    <span className="text-xs font-semibold tracking-[0.2em] uppercase">
                                        Tahun Pengalaman
                                    </span>
                                </div>
                            </div>

                            <div>
                                <span className="mb-4 block text-xs font-semibold tracking-[0.3em] text-[#f5921c] uppercase">
                                    Our Legacy
                                </span>
                                <h2 className="headline-font mb-6 text-4xl leading-tight font-bold text-[#15157d]">
                                    Kepercayaan adalah Pondasi Utama Kami
                                </h2>
                                <p className="mb-6 text-lg leading-relaxed text-[#464652]">
                                    DSL Property Development berdiri dengan visi
                                    untuk mengubah lanskap properti melalui
                                    pendekatan yang berpusat pada integritas
                                    struktural dan inovasi desain.
                                </p>
                                <p className="mb-8 leading-relaxed text-[#464652]">
                                    Sejak awal berdirinya, kami telah berkomitmen
                                    untuk memberikan hasil yang tidak hanya
                                    memenuhi harapan, tetapi melampaui standar
                                    industri. Nilai-nilai kami tertanam dalam
                                    setiap bata yang kami susun dan setiap sketsa
                                    yang kami gambar.
                                </p>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div className="border-l-2 border-[#15157d] pl-4">
                                        <h4 className="mb-1 text-sm font-semibold text-[#15157d]">
                                            VISI KAMI
                                        </h4>
                                        <p className="text-sm text-[#464652]">
                                            Menjadi pengembang properti terdepan
                                            dalam kualitas dan keberlanjutan.
                                        </p>
                                    </div>
                                    <div className="border-l-2 border-[#f5921c] pl-4">
                                        <h4 className="mb-1 text-sm font-semibold text-[#15157d]">
                                            MISI KAMI
                                        </h4>
                                        <p className="text-sm text-[#464652]">
                                            Menyelesaikan setiap tantangan
                                            konstruksi dengan presisi teknis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative bg-[#15157d] py-20 text-white">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <h2 className="headline-font mb-8 text-4xl leading-tight font-bold">
                                Mulai Proyek Anda Bersama Kami
                            </h2>
                            <p className="mb-10 text-lg text-white/80">
                                Tim ahli kami siap membantu mewujudkan visi
                                properti Anda. Hubungi kami untuk diskusi
                                mendalam mengenai rencana pembangunan Anda.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                                        <span className="material-symbols-outlined">
                                            phone
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-white/60">
                                            HUBUNGI KAMI
                                        </p>
                                        <p className="headline-font text-2xl font-semibold">
                                            +62 21 555 1234
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                                        <span className="material-symbols-outlined">
                                            mail
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-white/60">
                                            EMAIL
                                        </p>
                                        <p className="headline-font text-2xl font-semibold">
                                            info@dslproperty.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="bg-white p-12 shadow-xl">
                                <form
                                    className="space-y-6"
                                    onSubmit={(event) => event.preventDefault()}
                                >
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-xs font-semibold tracking-wider text-[#15157d] uppercase">
                                                Nama Lengkap
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Masukkan nama Anda"
                                                className="w-full border border-[#e5e2e1] bg-white px-4 py-3 text-[#15157d] outline-none transition focus:border-[#2dbcfe]"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-xs font-semibold tracking-wider text-[#15157d] uppercase">
                                                Alamat Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="email@contoh.com"
                                                className="w-full border border-[#e5e2e1] bg-white px-4 py-3 text-[#15157d] outline-none transition focus:border-[#2dbcfe]"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-xs font-semibold tracking-wider text-[#15157d] uppercase">
                                            Jenis Layanan
                                        </label>
                                        <select className="w-full border border-[#e5e2e1] bg-white px-4 py-3 text-[#15157d] outline-none transition focus:border-[#2dbcfe]">
                                            <option>Konstruksi Bangunan</option>
                                            <option>Desain Arsitektur</option>
                                            <option>Manajemen Proyek</option>
                                            <option>Lainnya</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-xs font-semibold tracking-wider text-[#15157d] uppercase">
                                            Pesan Anda
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Ceritakan rencana proyek Anda..."
                                            className="w-full border border-[#e5e2e1] bg-white px-4 py-3 text-[#15157d] outline-none transition focus:border-[#2dbcfe]"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#f5921c] py-4 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-all hover:bg-[#5f3400]"
                                    >
                                        KIRIM PERMINTAAN
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="w-full border-t-4 border-orange-500 bg-blue-900">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-8 py-12 md:flex-row">
                        <div className="mb-8 md:mb-0">
                            <div className="mb-2 text-xl font-bold text-white">
                                <span className="text-[#2E3192]">D</span>
                                <span className="text-[#2dbcfe]">S</span>
                                <span className="text-[#F3921F]">L</span>{' '}
                                <span className="text-[#F3921F]">Property</span>
                            </div>
                            <div className="headline-font text-xs tracking-normal text-slate-300">
                                © 2026 DSL Property Development. Built for
                                Structural Integrity.
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            {[
                                'Privacy Policy',
                                'Terms of Service',
                                'Project Map',
                                'Investor Portal',
                            ].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="headline-font text-xs tracking-normal text-slate-300 transition-opacity hover:text-orange-400 hover:underline"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
