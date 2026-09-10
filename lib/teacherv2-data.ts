import type { LucideIcon } from 'lucide-react'
import {
  Coffee,
  CupSoda,
  Cookie,
  Sandwich,
  NotebookPen,
  PenLine,
  Headphones,
  Ticket,
  Sprout,
  Leaf,
  TreePine,
  Trees,
} from 'lucide-react'

export type Product = {
  id: string
  name: string
  points: number
  description: string
  icon: LucideIcon
}

export const PRODUCTS: Product[] = [
  {
    id: 'alfajor',
    name: 'Alfajor triple',
    points: 150,
    description:
      'Alfajor de chocolate triple del kiosco. Un clásico para recargar energías entre clases.',
    icon: Cookie,
  },
  {
    id: 'agua',
    name: 'Botella de agua',
    points: 200,
    description:
      'Botella de agua mineral de 500ml. Hidratate mientras cuidás el planeta.',
    icon: CupSoda,
  },
  {
    id: 'cafe',
    name: 'Café con leche',
    points: 250,
    description: 'Café con leche recién hecho para arrancar el día con todo.',
    icon: Coffee,
  },
  {
    id: 'sandwich',
    name: 'Sándwich de miga',
    points: 400,
    description:
      'Sándwich de miga de jamón y queso. Perfecto para el recreo largo.',
    icon: Sandwich,
  },
  {
    id: 'lapicera',
    name: 'Lapicera TeacherV2',
    points: 320,
    description:
      'Lapicera edición TeacherV2 hecha con plástico reciclado. Escribí tu futuro sustentable.',
    icon: PenLine,
  },
  {
    id: 'cuaderno',
    name: 'Cuaderno ecológico',
    points: 600,
    description:
      'Cuaderno tapa dura de papel reciclado. Ideal para tus apuntes de la secundaria.',
    icon: NotebookPen,
  },
  {
    id: 'entrada',
    name: 'Entrada al cine',
    points: 900,
    description:
      'Entrada 2D para el cine del centro. Canjeá tus reciclajes por una salida.',
    icon: Ticket,
  },
  {
    id: 'auriculares',
    name: 'Auriculares in-ear',
    points: 1200,
    description:
      'Auriculares in-ear con cable. El premio grande para los recicladores más constantes.',
    icon: Headphones,
  },
]

export type Rank = {
  id: string
  name: string
  min: number
  icon: LucideIcon
  benefits: string[]
}

export const RANKS: Rank[] = [
  {
    id: 'semilla',
    name: 'Semilla',
    min: 0,
    icon: Sprout,
    benefits: ['Acceso al catálogo de canjes', 'Snacks y bebidas del kiosco'],
  },
  {
    id: 'brote',
    name: 'Brote',
    min: 500,
    icon: Leaf,
    benefits: ['Todo lo anterior', 'Descuento en útiles ecológicos', 'Insignia Brote en tu perfil'],
  },
  {
    id: 'arbol',
    name: 'Árbol',
    min: 1000,
    icon: TreePine,
    benefits: ['Todo lo anterior', 'Entradas y experiencias', 'Sorteos mensuales exclusivos'],
  },
  {
    id: 'bosque',
    name: 'Bosque',
    min: 2000,
    icon: Trees,
    benefits: ['Todo lo anterior', 'Productos tecnológicos premium', 'Reconocimiento anual TeacherV2'],
  },
]

export function getRankForPoints(points: number): Rank {
  let current = RANKS[0]
  for (const rank of RANKS) {
    if (points >= rank.min) current = rank
  }
  return current
}

export function getNextRank(points: number): Rank | null {
  return RANKS.find((r) => r.min > points) ?? null
}

export type Reciclaje = {
  id: string
  date: string
  material: string
  points: number
}

export const RECICLAJES: Reciclaje[] = [
  { id: 'r1', date: '2026-09-09', material: 'Botella PET', points: 5 },
  { id: 'r2', date: '2026-09-09', material: 'Lata de aluminio', points: 5 },
  { id: 'r3', date: '2026-09-08', material: 'Papel', points: 5 },
  { id: 'r4', date: '2026-09-08', material: 'Cartón', points: 5 },
  { id: 'r5', date: '2026-09-06', material: 'Botella PET', points: 5 },
  { id: 'r6', date: '2026-09-05', material: 'Vidrio', points: 5 },
  { id: 'r7', date: '2026-09-03', material: 'Lata de aluminio', points: 5 },
  { id: 'r8', date: '2026-09-01', material: 'Papel', points: 5 },
]

export type LeaderboardEntry = {
  id: string
  name: string
  points: number
  isCurrentUser?: boolean
}

export const LEADERBOARD: LeaderboardEntry[] = [
  { id: 'l1', name: 'Martina G.', points: 2340 },
  { id: 'l2', name: 'Tomás R.', points: 1890 },
  { id: 'l3', name: 'Camila S.', points: 1520 },
  { id: 'l4', name: 'Vos', points: 740, isCurrentUser: true },
  { id: 'l5', name: 'Lucas M.', points: 610 },
  { id: 'l6', name: 'Sofía P.', points: 540 },
  { id: 'l7', name: 'Benja T.', points: 430 },
  { id: 'l8', name: 'Julieta A.', points: 320 },
]
