import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { searchService } from '../../modules/search/services/search.service';
import { Loader } from '../../components/loader/loader.component';
import { IItem } from '../../modules/search/interfaces/item.interface';
import { RoutePath } from '../../routes';
import './details.page.css';

export const DetailsPage: FC = () => {
  const navigate = useNavigate();
  const [currentQueryParameters] = useSearchParams();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [details, setDetails] = useState<IItem | null>(null);

  const handleClose = () => {
    navigate({ pathname: RoutePath.root, search: currentQueryParameters.toString() });
  };

  useEffect(() => {
    if (id) {
      (async () => {
        setIsLoading(true);

        const item = await searchService.getItemById(parseInt(id, 10));

        setDetails(item);
        setIsLoading(false);
      })();
    }
  }, [id]);

  return (
    <section className="details-page">
      <div className="details-page__content">
        <h1>Details</h1>
        <button onClick={handleClose}>Close</button>
        {isLoading ? (
          <Loader />
        ) : (
          details && (
            <div>
              <p>
                <b>id:</b> {details.id}
              </p>
              <p>
                <b>title:</b> {details.title}
              </p>
              <p>
                <b>category:</b> {details.category}
              </p>
              <p>
                <b>brand:</b> {details.brand}
              </p>
              <p>
                <b>description:</b> {details.description}
              </p>
              <p>
                <b>price:</b> {details.price} USD
              </p>
              <p>
                <b>rating:</b> {details.rating} of 5.0
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};
