
export const MOCK_USER = {
  name: "Elara",
  avatar: "https://i.pravatar.cc/150?u=elara"
};

export const RECENT_FINDS = [
  { id: 1, price: "200 kr", image: "https://picsum.photos/seed/item1/200" },
  { id: 2, price: "150 kr", image: "https://picsum.photos/seed/item2/200" },
  { id: 3, price: "300 kr", image: "https://picsum.photos/seed/item3/200" }
];

export const NEARBY_BAGS = [
  { id: 1, name: "Barnkläder SE", distance: "0.5 km", icon: "child_friendly", bg: "bg-[#dcfce7]" },
  { id: 2, name: "Festplagg", distance: "1.2 km", icon: "checkroom", bg: "bg-[#fef9c3]" }
];

export const CURRENT_BAG = {
  id: "204",
  name: "Vintage-kassen",
  status: "Din tur!",
  timeLeft: "2 dagar",
  progress: 3,
  total: 4
};

export const HANDOVER_ITEMS = [
    {
        id: 1,
        name: "Jeansjacka",
        details: "Vintage, L",
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=600&auto=format&fit=crop",
        selected: true
    },
    {
        id: 2,
        name: "Gummistövlar",
        details: "Stl 38",
        image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&q=80&w=600",
        selected: false
    },
    {
        id: 3,
        name: "Sommarklänning",
        details: "Zara, S",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600&auto=format&fit=crop",
        selected: false,
        isProfile: true
    }
];

export const NEXT_PERSON = {
    name: "Anders P.",
    distance: "1.2 km",
    avatar: "https://i.pravatar.cc/150?u=user_anders",
    status: "Väntar!"
};


export const MAP_CATEGORIES = ['Alla', 'Barnkläder', 'Dam', 'Vintage'];

export const CHAT_MESSAGES = [
    {
        id: 1,
        sender: "Anders",
        message: "Hej! Jag såg att du lagt upp en ny kasse. Jag kan hämta den imorgon efter jobbet vid 17-tiden. Funkar det för dig?",
        time: "14:02",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo56L4YRkVm5piBupocWWoP_gQbdigGg8QTdLUFUFvnaUCAGL86uLQBhLTyc55UYfk-aHnjY2OjsUaTt2Wwe48m-XYV_shoKOIN5cOf3QabUpaux12J-dd_L2uTbFNZH1NFgC77Ty2Q1wjcN5E_KaSZ4o5YrQg83iIuQBgJvls7meTvCJUGkIe77-RCQVLsB4jQrzitkq5CUXsdlx9nJhi30tKezRRFZxmf-XAwaMOqeLw-af53ZAbxDoKRxeu_lc1qAZ08PMbgjQ7",
        isSender: false
    },
    {
        id: 2,
        sender: "Me",
        message: "Absolut, det går jättebra. Jag är hemma hela kvällen.",
        time: "14:05",
        isSender: true
    },
    {
        id: 3,
        sender: "Anders",
        message: "Härligt! Har du portkod eller ringer jag på?",
        time: "14:06",
        isSender: false,
        avatar: "https://i.pravatar.cc/150?u=user_anders"
    }
];

export const TURN_ORDER_USERS = [
    { id: 1, name: 'Elin Andersson', role: 'Mottagen - 2 dagar sedan', status: 'Håller kassen', active: false, avatar: 'https://i.pravatar.cc/150?u=user123' },
    { id: 2, name: 'Din tur', role: 'Ca 5 dagar', status: 'active', active: true, avatar: null },
    { id: 3, name: 'Marcus Johnson', role: 'Solna', status: 'waiting', active: false, avatar: 'https://i.pravatar.cc/150?u=user22' },
    { id: 4, name: 'Sofia Olofsson', role: 'Vasastan', status: 'waiting', active: false, avatar: 'https://i.pravatar.cc/150?u=user126' },
    { id: 5, name: 'David Berg', role: 'Södermalm', status: 'paused', active: false, avatar: 'https://i.pravatar.cc/150?u=user110' },
];

