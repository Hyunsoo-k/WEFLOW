import CasesDetailPage from '@/view/CasesDetailPage/CasesDetailPage';

type Props = {
  params: { name: string }
}

export default async function Page({ params }: Props) {
  const { name } = await params;

  if (!name) {
    return null;  
  }

  return <CasesDetailPage name={name} />
};