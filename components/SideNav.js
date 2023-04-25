import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';

import { BsSearch, BsBookmark } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { CgMoreO } from 'react-icons/cg';
import { FaBell, FaUserAlt, FaFeatherAlt, FaHashtag } from 'react-icons/fa';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { SiTwitter } from 'react-icons/si';
import { RiHome7Fill } from 'react-icons/ri';
import { TbForms } from 'react-icons/tb';
import { GiBookmarklet } from 'react-icons/gi';
import Link from 'next/link';

const SideNav = ({ currPage }) => {
	console.log('current path = ', currPage);
	return (
		<div className="max-w-[200px] mt-6 w-full h-fit sticky top-2 hidden lg:block box-border p-px pr-2 bg-[#121212]">
			<div className="mb-2">
				<div className="p-1 w-full flex items-center space-x-2 text-cyan-200">
					<IconContext.Provider
						value={{
							size: '1.4em',
							className: 'global-class-name',
						}}
					>
						<GiBookmarklet />
					</IconContext.Provider>
					<h1 className=" text-lg font-semibold capitalize">
						Getting Started
					</h1>
				</div>
				<ul className="h-full w-full flex flex-col justify-evenly space-y-1">
					<Link
						className={
							'rounded-md ml-6 px-3 py-1 w-fit hover:bg-zinc-700/40'
						}
						href={'/docs/getting-started'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								Introduction
							</span>
						</div>
					</Link>
					<Link
						className={
							'rounded-md ml-6 px-3 py-1 w-fit hover:bg-zinc-700/40'
						}
						href={'/docs/getting-started'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								Download
							</span>
						</div>
					</Link>
					<Link
						className={
							'rounded-md ml-6 px-3 py-1 w-fit hover:bg-zinc-700/40'
						}
						href={'/docs/getting-started'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								Contribute
							</span>
						</div>
					</Link>
				</ul>
			</div>
			<div className="mb-2">
				<div className="p-1 w-full flex items-center space-x-2 text-cyan-200">
					<IconContext.Provider
						value={{
							size: '1.4em',
							className: 'global-class-name',
						}}
					>
						<TbForms />
					</IconContext.Provider>
					<h1 className=" text-lg font-semibold capitalize">Forms</h1>
				</div>
				<ul className="h-full w-full flex flex-col justify-evenly space-y-1">
					<Link
						className={`rounded-md ml-6 px-3 py-1 w-fit ${
							currPage === '/docs/forms/overview'
								? 'bg-zinc-700/40'
								: ''
						} hover:bg-zinc-700/40`}
						href={'/docs/forms/overview'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								Overview
							</span>
						</div>
					</Link>
					<Link
						className={`rounded-md ml-6 px-3 py-1 w-fit ${
							currPage === '/docs/forms/form-control'
								? 'bg-zinc-700/40'
								: ''
						} hover:bg-zinc-700/40`}
						href={'/docs/forms/form-control'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								Form Control
							</span>
						</div>
					</Link>
					<Link
						className={`rounded-md ml-6 px-3 py-1 w-fit ${
							currPage === '/docs/forms/select'
								? 'bg-zinc-700/40'
								: ''
						} hover:bg-zinc-700/40`}
						href={'/docs/forms/select'}
					>
						<div className="flex items-center">
							<span className="text-sm font-semibold capitalize">
								Select
							</span>
						</div>
					</Link>
					<Link
						className={`rounded-md ml-6 px-3 py-1 w-fit ${
							currPage === '/docs/forms/checks-radios'
								? 'bg-zinc-700/40'
								: ''
						} hover:bg-zinc-700/40`}
						href={'/docs/forms/checks-radios'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								Checks & radio
							</span>
						</div>
					</Link>
					<Link
						className={`rounded-md ml-6 px-3 py-1 w-fit ${
							currPage === '/docs/forms/range'
								? 'bg-zinc-700/40'
								: ''
						} hover:bg-zinc-700/40`}
						href={'/docs/forms/range'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								Range
							</span>
						</div>
					</Link>
					<Link
						className={`rounded-md ml-6 px-3 py-1 w-fit ${
							currPage === '/docs/forms/range'
								? 'bg-zinc-700/40'
								: ''
						} hover:bg-zinc-700/40`}
						href={'/docs/forms/input-group'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								Input Groups
							</span>
						</div>
					</Link>
					<Link
						className={`rounded-md ml-6 px-3 py-1 w-fit ${
							currPage === '/docs/forms/validation'
								? 'bg-zinc-700/40'
								: ''
						} hover:bg-zinc-700/40`}
						href={'/docs/forms/validation'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								Validation
							</span>
						</div>
					</Link>
					<span className="flex-grow"></span>
				</ul>
			</div>
			<div className="mb-2">
				<div className="p-1 w-full flex items-center space-x-2 text-cyan-200">
					<IconContext.Provider
						value={{
							size: '1.4em',
							className: 'global-class-name',
						}}
					>
						<GiBookmarklet />
					</IconContext.Provider>
					<h1 className=" text-lg font-semibold capitalize">
						Components
					</h1>
				</div>
				<ul className="h-full w-full flex flex-col justify-evenly space-y-1">
					<Link
						className={`rounded-md ml-6 px-3 py-1 w-fit ${
							currPage === '/components/multiselect'
								? 'bg-zinc-700/40'
								: ''
						} hover:bg-zinc-700/40`}
						href={'/components/multiselect'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								multiselect
							</span>
						</div>
					</Link>
					<Link
						className={`rounded-md ml-6 px-3 py-1 w-fit ${
							currPage === '/components/select'
								? 'bg-zinc-700/40'
								: ''
						} hover:bg-zinc-700/40`}
						href={'/components/select'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								select
							</span>
						</div>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default SideNav;