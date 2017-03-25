export const configMongo = {
  databaseURL: process.env.DATABASE_URL || 'mongodb://<dbuser>:<dbpass>@ds141410.mlab.com:41410/comunidad'
};

export default { configMongo };
