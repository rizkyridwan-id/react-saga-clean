import { useParams } from 'react-router-dom';

export default function ModifyGuest() {
  const param = useParams();

  return <h1 className="text-2xl">Modify Page - {param.id}</h1>;
}
