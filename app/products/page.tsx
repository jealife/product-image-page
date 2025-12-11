import { redirect } from 'next/navigation';
export default function RedirectProducts() {
    redirect('/shop'); 
    
    return null; 
}