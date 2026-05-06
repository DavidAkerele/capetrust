"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from "next/image";
import Link from "next/link";

export function FloatingHeader() {
	const pathname = usePathname();
	const isSubPage = pathname !== '/';
	const isDarkPage = pathname === '/investment'; // Investment page has a dark background
	const [open, setOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	
	const textColor = "text-white";
	const textMutedColor = "text-white/80";

	useEffect(() => {
		const handleScroll = () => {
		  setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const links = [
		{ label: 'About', href: '/about' },
		{ label: 'Investment', href: '/investment' },
		{ label: 'Products', href: '/products' },
		{ label: 'FAQ', href: '/faq' },
		{ label: 'Contact', href: '/contact' },
	];

	return (
		<header
			className={cn(
				'fixed z-50 transition-all duration-500 left-0 top-0 w-full max-w-full',
				isScrolled || isSubPage
					? 'bg-[var(--color-primary)]/90 supports-[backdrop-filter]:bg-[var(--color-primary)]/80 backdrop-blur-lg border-b border-white/10 shadow-lg' 
					: 'bg-transparent border-transparent shadow-none'
			)}
		>
			<nav className={cn("mx-auto flex items-center justify-between transition-all duration-500 px-6 md:px-12 lg:px-20", isScrolled ? "py-3" : "py-5")}>
				<Link href="/" className="flex items-center space-x-3 group">
					<div className={cn("relative flex items-center justify-center transition-all duration-500", isScrolled ? "w-10 h-10" : "w-14 h-14")}>
						<Image 
							src="/logo.png" 
							alt="Capetrust Logo" 
							fill 
							sizes="(max-width: 768px) 40px, 56px"
							className="object-contain drop-shadow-md" 
						/>
					</div>
					<div className="flex flex-col">
						<span className={cn("font-serif font-bold tracking-tight leading-none transition-all duration-500 italic", textColor, isScrolled ? "text-lg" : "text-xl")}>
							Capetrust
						</span>
						<span className={cn("text-[7px] font-bold uppercase tracking-[0.3em] mt-1 transition-all duration-500", textMutedColor)}>
							Funeral Services
						</span>
					</div>
				</Link>

				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link) => (
						<Link
							key={link.href}
							className={cn(
								buttonVariants({ variant: 'ghost', size: 'sm' }),
								"transition-all text-[9px] uppercase font-bold tracking-[0.2em] text-white/80 hover:text-white hover:bg-white/5 px-4 rounded-full"
							)}
							href={link.href}
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="flex items-center gap-3">
					<Button asChild size="sm" className="hidden sm:inline-flex rounded-full px-6 h-10 text-[9px] font-bold uppercase tracking-[0.2em] bg-[var(--color-secondary)] hover:bg-white hover:text-[var(--color-primary)] transition-all shadow-xl">
						<Link href="/contact">Inquire Now</Link>
					</Button>
					
					<Sheet open={open} onOpenChange={setOpen}>
						<Button
							size="icon"
							variant="outline"
							onClick={() => setOpen(!open)}
							className="lg:hidden rounded-full transition-colors bg-white/10 border-white/20 text-white hover:bg-white/20"
						>
							<MenuIcon className="size-5" />
						</Button>
						<SheetContent
							className="bg-white supports-[backdrop-filter]:bg-white/95 backdrop-blur-xl border-l-0"
							showClose={false}
							side="left"
						>
							<div className="flex items-center space-x-3 mt-6 px-4">
								<div className="relative w-12 h-12 flex items-center justify-center rounded-md">
									<Image 
										src="/logo.png" 
										alt="Capetrust Logo" 
										fill 
										sizes="48px"
										className="object-contain" 
									/>
								</div>
								<span className="font-sans text-xl font-bold text-[var(--color-primary)]">
									CAPETRUST
								</span>
							</div>

							<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
								{links.map((link) => (
									<Link
										key={link.href}
										className={buttonVariants({
											variant: 'ghost',
											className: 'justify-start text-lg font-medium text-[var(--color-primary)] h-12',
										})}
										href={link.href}
										onClick={() => setOpen(false)}
									>
										{link.label}
									</Link>
								))}
							</div>
							<SheetFooter className="px-4 pb-8 mt-auto bg-transparent border-t-0 flex flex-col gap-3">
								<Button className="w-full rounded-full h-12 text-lg">Contact Us</Button>
								<Button variant="outline" className="w-full rounded-full h-12 text-lg border-[var(--color-primary)] text-[var(--color-primary)]">24/7 Support Line</Button>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
