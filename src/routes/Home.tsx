import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import GridColumn from '../components/GridColumn';
import GridRow from '../components/GridRow';
import withAuth from '../components/HOC/withAuth';
import { supabaseClient } from '../supabaseClient';

const Home = () => {
  const navigate = useNavigate();

  const signOut = async () => {
    await supabaseClient.auth.signOut();
    await navigate('/sign-in');
  };

  return (
    <main className="max-w-[1400px] mx-auto">
      <header className="flex justify-between mb-4 sticky top-0 bg-white py-4 px-4">
        아이콘
        <form>
          <input className="border border-gray-700 px-4 py-2 rounded-full" />
        </form>
      </header>
      <GridColumn>
        <div className="sticky top-[90px]">
          <GridRow>
            <Card>
              <div className="w-28 h-28 bg-gray-300 rounded-full" />
              <div className="font-bold mt-2">username</div>
              <div className="text-gray-500">@userId</div>
            </Card>
            <Card>
              <aside className="[&>div]:font-bold [&>div]:text-lg gap-y-6 flex flex-col mb-80">
                <div>Home</div>
                <div>My Profile</div>
                <div>Trend</div>
                <div>Search</div>
                <div>Settings</div>
              </aside>
            </Card>
          </GridRow>
        </div>
        <div className="col-span-2">
          <GridRow>
            <Card>
              <form className="flex flex-col items-end">
                <textarea
                  className="border border-gray-700 w-full rounded-md px-2 py-4"
                  placeholder="What's happening today?"
                />
                <button className="mt-4 bg-black text-white rounded-full px-4 py-2">
                  Tweet
                </button>
              </form>
            </Card>
            <Card>
              <div className="min-h-[150px]">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gray-300 rounded-full" />
                  <div className="ml-2">
                    <div className="font-bold mt-2">username</div>
                    <div className="text-gray-500">@userId</div>
                  </div>
                </div>
                <div className="mt-4">
                  {`I'm going to create a Twitter clone coding site with nomad
                  coder`}
                </div>
              </div>
            </Card>
            <Card>
              <div className="min-h-[150px]">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gray-300 rounded-full" />
                  <div className="ml-2">
                    <div className="font-bold mt-2">username</div>
                    <div className="text-gray-500">@userId</div>
                  </div>
                </div>
                <div className="mt-4">
                  {`I'm going to create a Twitter clone coding site with nomad
                  coder`}
                </div>
              </div>
            </Card>
            <Card>
              <div className="min-h-[150px]">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gray-300 rounded-full" />
                  <div className="ml-2">
                    <div className="font-bold mt-2">username</div>
                    <div className="text-gray-500">@userId</div>
                  </div>
                </div>
                <div className="mt-4">
                  {`I'm going to create a Twitter clone coding site with nomad
                  coder`}
                </div>
              </div>
            </Card>
            <Card>
              <div className="min-h-[150px]">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gray-300 rounded-full" />
                  <div className="ml-2">
                    <div className="font-bold mt-2">username</div>
                    <div className="text-gray-500">@userId</div>
                  </div>
                </div>
                <div className="mt-4">
                  {`I'm going to create a Twitter clone coding site with nomad
                  coder`}
                </div>
              </div>
            </Card>
          </GridRow>
        </div>
        <div className="sticky top-[90px] hidden md:block">
          <GridRow>
            <Card>
              <div className="font-bold mb-4">Trend</div>
              <ul className="[&>li]:font-semibold [&>li]:text-sm flex flex-col gap-y-2">
                <li>1. Trend</li>
                <li>2. Trend</li>
                <li>3. Trend</li>
                <li>4. Trend</li>
                <li>5. Trend</li>
              </ul>
            </Card>
            <Card title="추천 계정">
              <div className="w-14 h-14 bg-gray-300 rounded-full" />
              <div className="flex justify-between items-start mt-2">
                <div>
                  <div className="font-bold">username</div>
                  <div className="text-gray-500">@userId</div>
                </div>
                <button className="bg-black text-white rounded-full px-4 py-1 text-xs">
                  Follow
                </button>
              </div>
            </Card>
          </GridRow>
        </div>
      </GridColumn>
      <button onClick={signOut}>Logout</button>
    </main>
  );
};

export default withAuth(Home);
