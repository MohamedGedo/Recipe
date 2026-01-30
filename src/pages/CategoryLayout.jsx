import CategoryHeader from './../components/CategoryHeader';
import { Outlet } from 'react-router-dom';

export default function CategoryLayout() {

return <>
<CategoryHeader/>
<Outlet/>
</>
}
