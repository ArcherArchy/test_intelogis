import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDeterminedRoute } from '../HTTP-services/routeDetermingAPI';
import { changeDeterminedRouteCoordinates } from '../store/reducers/determinedRouteReducer';
import { useSelectedRoute } from './useSelectedRoute';

export function useDeterminedRoute(){
    const dispatch = useDispatch();
    const [selectedRoute] = useSelectedRoute()

    function selectDeterminedRoute(){
        return useSelector((state) => state.determinedRoute)
    }

    const determinedRoute = selectDeterminedRoute()

    function setDeterminedRoute(coordinates){
        dispatch(changeDeterminedRouteCoordinates(coordinates))
    }

    
  useEffect(() => {
    async function getAndSetDeterminedRoute() {
      const data = await getDeterminedRoute(selectedRoute.value);
      setDeterminedRoute(toClientModel(data));
    }
    getAndSetDeterminedRoute();
  }, [selectedRoute.index]);

    return [determinedRoute, setDeterminedRoute]
}

const toClientModel = (routeData) => {
    const routeCoordinates = [];
    const legs = routeData?.routes[0]?.legs;
    legs.map((leg) =>
      leg.steps?.map((step) =>
        routeCoordinates.push(
          ...step.geometry?.coordinates.map((coordinate) => [
            coordinate[1],
            coordinate[0],
          ])
        )
      )
    );
    return routeCoordinates;
  };
