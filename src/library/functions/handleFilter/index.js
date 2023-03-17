import {
  closeDrawer,
  filterHandler,
  hideLoading,
  page,
  render,
  showLoading,
} from '@/library';

const filters = {
  priority: '/',
  status: '/',
  deadline: '/',
};
export const handleFilter = async (e) => {
  console.log(e);
  e.target.id === 'priority' && (filters.priority = e.target.value);
  e.target.id === 'status' && (filters.status = e.target.value);
  if (e.target.id === 'Deadline') {
    !e.target.value
      ? (filters.deadline = '/')
      : (filters.deadline = `=${e.target.value}`);
  }

  if (filters.priority === '/' && filters.status === '/') {
    document.querySelector('#rpp').value = 'select';
    document.querySelector('#rpp').disabled = false;
    document.querySelector('#prev').classList.remove('cursor-not-allowed');
    document.querySelector('#prev').disabled = false;
    document.querySelector('#next').classList.remove('cursor-not-allowed');
    document.querySelector('#next').disabled = false;
    showLoading();
    closeDrawer();
    await filterHandler(
      `_page=${page.currentPage}&_limit=${page.rpp}&_sort=id&_order=desc`
    ).then((res) => render(res));
    hideLoading();
  } else {
    document.querySelector('#rpp').value = 'All';
    document.querySelector('#rpp').disabled = 'true';
    document.querySelector('#prev').classList.add('cursor-not-allowed');
    document.querySelector('#prev').disabled = true;
    document.querySelector('#next').classList.add('cursor-not-allowed');
    document.querySelector('#next').disabled = true;
    showLoading();
    closeDrawer();
    await filterHandler(
      `priority${filters.priority}&status${filters.status}&date${filters.deadline}&_sort=id&_order=desc`
    ).then((res) => render(res));
    hideLoading();
  }
};
