### Catatan

install untuk validasi package `class-validator class-transformer`

utility untuk remove redundant code duplication `@nestjs/mapped-types`

untuk orm menggunakan type orm harus di install `@nestjs/typeorm typeorm pg`

untuk membuat migrasi 
```commandline
 npx typeorm migration:create ./src/migrations/CoffeeRefactor
 
 npx typeorm migration:run
 
 npx typeorm migration:revert
 
 npx typeorm migration:generate ./src/migrations/SchemaSync

```

untuk membedakan configurasi 
`npx i @nestjs/config`