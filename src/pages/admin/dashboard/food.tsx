import withAdminAuth from '@/components/Backend/withAdminAuth';
import Layout from '@/components/Backend/layout';

function FoodPage() {
  return (
    <Layout>
      <div>
        <h1>Food</h1>
      </div >
    </Layout>
  );
}

export default withAdminAuth(FoodPage);