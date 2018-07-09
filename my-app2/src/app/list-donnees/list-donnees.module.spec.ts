import { ListDonneesModule } from './list-donnees.module';

describe('ListDonneesModule', () => {
  let listDonneesModule: ListDonneesModule;

  beforeEach(() => {
    listDonneesModule = new ListDonneesModule();
  });

  it('should create an instance', () => {
    expect(listDonneesModule).toBeTruthy();
  });
});
