import { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchPictures } from '../services/pixabayAPI';
import { perPage } from '../services/pixabayAPI';
import { Button } from './Button/Button';
import Loader from './Loader/Loader';
import { Text } from './Text/Text';

export class App extends Component {
  state = {
    searchQuery: '',
    pictures: [],
    page: 1,
    loading: false,
    loadMore: false,
    error: '',
  };
  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true, loadMore: true });
        const res = await fetchPictures(
          this.state.searchQuery,
          this.state.page
        );
        this.setState({
          pictures:
            prevState.searchQuery !== this.state.searchQuery
              ? res.hits
              : [...prevState.pictures, ...res.hits],
        });
        if (res.total === 0) {
          throw new Error('Sorry, no images found');
        }
        if (res.totalHits <= this.state.page * perPage) {
          this.setState({
            loadMore: false,
          });
        }
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  onError = () => {
    this.setState({ error: true, loading: false, loadMore: false });
  };

handleSearch = searchQuery => {
    const initialStateParams = {
      page: 1,
      pictures: [],
      error: '',
      loadMore: false,
    };
  
    if (searchQuery === this.state.searchQuery) {
      toast.error(
        'The same request. Change your request'
      );
      return;
    }

    this.setState({ ...initialStateParams, searchQuery });
};
  
   handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { error, pictures, loading, loadMore } = this.state;
    return (
      <>
        <SearchBar handleSearch={this.handleSearch} />
      {pictures.length > 0 && !error && <ImageGallery pictures={pictures} />}
        {pictures.length > 0 && loadMore && !error && (
          <Button onClick={this.handleLoadMore} />
        )}
           {error && !loading && <Text>{error}</Text>}
        {loading && <Loader />}
        <ToastContainer />
      </>
    );
  }
}
