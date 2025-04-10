"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BiGridAlt, BiCoin, BiMoney, BiDiamond } from "react-icons/bi";

export default function PriceFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentFilter = searchParams.get("filter") || '';

  const filters = [
    { value: '', label: 'All', icon: <BiGridAlt /> },
    { value: 'small', label: 'Under $50', icon: <BiCoin /> },
    { value: 'medium', label: '$50-$100', icon: <BiMoney /> },
    { value: 'high', label: 'Over $100', icon: <BiDiamond /> },
  ];

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    if (filter === '') {
      params.delete('filter');
    } else {
      params.set("filter", filter);
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mb-4 d-flex flex-wrap gap-4 justify-content-center py-2 mx-3 rounded-4 bg-gray shadow-sm  text-center">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleFilter(filter.value)}
          className={`btn ${
            currentFilter === filter.value 
              ? 'btn-primary' 
              : 'btn-outline-primary'
          } rounded-9 d-flex align-items-center`}
        >
          <span className="me-2">{filter.icon}</span>
          {filter.label}
        </button>
      ))}
    </div>
  );
}