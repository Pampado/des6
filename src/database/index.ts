import { createConnection, getConnectionOptions, Connection } from 'typeorm'

export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions()

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      host: process.env.PG_HOST,
      port: process.env.PORT_PG,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    }),
  )
}
