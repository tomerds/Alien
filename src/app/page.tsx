import createClient from './utils/supabase-server';
import Login from './Login';
import Footer from './Footer';


export default async function HomePage() {
  const supabase = createClient();

  return (
    <div>
      <Login />
      <Footer />
    </div>
  );
}
