// types/booking.ts
export interface Service {
  serviceId: number;
  serviceName: string;
  categoryId: number;
  isActive: boolean;
  pricing_model: 'FIXED' | 'CUSTOM'; 
  base_price: number;
  description: string;
}
