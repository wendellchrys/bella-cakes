import { getFiltersValues } from './getFiltersValues';
import { Filters } from "@/app/types";


describe(':: utils :: getFiltersValues', () => {
  it('should correctly return only filled fields excluding "limit" and "skip"', () => {
    const input: Filters = {
      brands: [],
      categories: [],
      text: ["capo"],
      limit: 12,
      maxPrice: 100,
      minPrice: undefined,
      skip: 0,
      sort: "",
      variants: ["red", "blue"]
    };
    const expected = {
      text: ["capo"],
      maxPrice: 100,
      variants: ["red", "blue"]
    };
    expect(getFiltersValues(input)).toEqual(expected);
  });

  it('should return an empty object if no fields are filled except "limit" and "skip"', () => {
    const input: Filters = {
      brands: [],
      categories: [],
      text: [],
      limit: 12,
      maxPrice: undefined,
      minPrice: undefined,
      skip: 0,
      sort: "",
      variants: []
    };
    const expected = {};
    expect(getFiltersValues(input)).toEqual(expected);
  });

  it('should exclude empty arrays and undefined values', () => {
    const input: Filters = {
      brands: ["nike"],
      categories: [],
      text: undefined,
      limit: 10,
      maxPrice: undefined,
      skip: 3,
      sort: "price_asc",
      variants: undefined
    };
    const expected = {
      brands: ["nike"],
      sort: "price_asc"
    };
    expect(getFiltersValues(input)).toEqual(expected);
  });
});
