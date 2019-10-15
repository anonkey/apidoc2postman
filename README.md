
# apidoc2postman

## Description

This convert a swagger file in postman collection, using examples to generate the collection

## Install

```sh
yarn add -g git+https://github.com/anonkey/apidoc2postman
```
or with npm

```sh
npm i -g git+https://github.com/anonkey/apidoc2postman
```

## Usage

To convert the ./apidoc.json file just run

```sh
apidoc2postman
```

### Choose input Path

if your file has another name or path put it in argument or pass it with `-i` option

```sh
apidoc2postman ./path/to/file.json
```

or

```sh
apidoc2postman -i ./path/to/file.json
```

### Choose output Path

If you want to choose the output path juste use `-o` option

```sh
apidoc2postman -o ./path/to/collection.json
```
