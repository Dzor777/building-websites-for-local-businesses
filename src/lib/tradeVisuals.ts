export interface TradeVisualDetails {
  tradeTitle: string;
  tradeName: string;
  watermark: string;
  panoramicImage: string;
  residentialImage: string;
  commercialImage: string;
}

export function getTradeVisualDetails(niche: string, clientName?: string, heroImageUrl?: string): TradeVisualDetails {
  const n = `${niche} ${clientName || ''}`.toLowerCase();

  // 1. Tree Service & Arborists
  if (n.includes('tree') || n.includes('arbor')) {
    return {
      tradeTitle: 'Certified Tree Care & Arborist Specialists',
      tradeName: 'Tree Service & Removal',
      watermark: 'CERTIFIED ARBORISTS',
      panoramicImage: './images/tree-service.jpg',
      residentialImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1000',
      commercialImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1000',
    };
  }

  // 2. Lawn Care & Landscaping
  if (n.includes('lawn') || n.includes('landscape') || n.includes('turf') || n.includes('mow')) {
    return {
      tradeTitle: 'Lawn Care & Landscaping Specialists',
      tradeName: 'Lawn & Landscaping',
      watermark: 'LAWN & LANDSCAPE',
      panoramicImage: './images/lawn-care.jpg',
      residentialImage: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=1000',
      commercialImage: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&q=80&w=1000',
    };
  }

  // 3. Painting & Drywall
  if (n.includes('paint')) {
    return {
      tradeTitle: 'Interior & Exterior Painting Contractors',
      tradeName: 'Painting & Finishing',
      watermark: 'PRO PAINTERS',
      panoramicImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1600',
      residentialImage: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1000',
      commercialImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000',
    };
  }

  // 4. Pressure Washing & Exterior Cleaning
  if (n.includes('pressure') || n.includes('wash') || n.includes('softwash')) {
    return {
      tradeTitle: 'Exterior Cleaning & Pressure Wash Specialists',
      tradeName: 'Pressure Washing & SoftWash',
      watermark: 'PRESSURE WASHING',
      panoramicImage: './images/pressure-washing.jpg',
      residentialImage: './images/pressure-washing.jpg',
      commercialImage: './images/commercial-pressure-washing.jpg',
    };
  }

  // 5. Electrical
  if (n.includes('electr')) {
    return {
      tradeTitle: 'Licensed Electrical Contractors',
      tradeName: 'Electrical & Power',
      watermark: 'MASTER ELECTRICIANS',
      panoramicImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1600',
      residentialImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
      commercialImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000',
    };
  }

  // 6. Roofing & Restoration
  if (n.includes('roof')) {
    return {
      tradeTitle: 'Roofing & Restoration Contractors',
      tradeName: 'Roofing & Restoration',
      watermark: 'ROOFING SPECIALISTS',
      panoramicImage: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1600',
      residentialImage: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1000',
      commercialImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    };
  }

  // 7. HVAC & Climate
  if (n.includes('hvac') || n.includes('air conditioning') || n.includes('cooling') || n.includes('heating')) {
    return {
      tradeTitle: 'HVAC & Climate Control Specialists',
      tradeName: 'HVAC & Cooling',
      watermark: 'HVAC TECHNICIANS',
      panoramicImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1600',
      residentialImage: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=1000',
      commercialImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000',
    };
  }

  // 8. Plumbing & Drain
  if (n.includes('plumb') || n.includes('drain') || n.includes('pipe') || n.includes('water heater')) {
    return {
      tradeTitle: 'Master Plumbing & Drain Specialists',
      tradeName: 'Plumbing & Drain',
      watermark: 'MASTER PLUMBERS',
      panoramicImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1600',
      residentialImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1000',
      commercialImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000',
    };
  }

  // Fallback for general contractors
  return {
    tradeTitle: `${niche} Contractors`,
    tradeName: niche,
    watermark: 'PROFESSIONAL CONTRACTORS',
    panoramicImage: heroImageUrl || 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1600',
    residentialImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    commercialImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
  };
}
