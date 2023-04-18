# Usage
## Single contract file input
### `--pkg-name`
Specify the package name of output Go file, default is `mypackage`.
### `--source`
Specify where to read Cadence file, default is `stdin`
```shell
$ easi-gen --source <file>
# or
$ cat <file> | easi-gen
```
### `--output`
Specify where to write Go file, default is `stdout`
```shell
$ cat example.cdc | easi-gen
package example

type ContractExample struct {
  address string
  flowCli *flowSdk.cli
}
...

# or
$ cat example.cdc | easi-gen > test.go
$ cat test.go
package example

type ContractExample struct {
  address string
  flowCli *flowSdk.cli
}
...
```
If specified, `--output` must be a file, or not exists.
```shell
$ easi-gen --source /path/to/example.cdc --output /path/to/test/mypackage/mypackage.go
$ cat /path/to/test/mypackage/mypackage.go
package example

type ContractExample struct {
  address string
  flowCli *flowSdk.cli
}
...

# or
Error: /path/to/json/mypackage is a folder
```
## Multiple contract files input
There will be a object contains all contract file path in `flow.json` named `contracts`
### `--pkg-name`
Specify the package name of output Go file, default is `mypackage`.
### `--source (required)`
Specify where to read `flow.json` file
### `--output`
Specify where to write Go files, default is the same as package name, and under the parent of input json.
```shell
$ easi-gen --source /path/to/json/flow.json
# will output to /path/to/json/mypackage
```
If specified, `--output` must be a folder, or not exists.
```shell
$ easi-gen --source /path/to/json/flow.json --output /path/to/json/mypackage
# will output to /path/to/json/mypackage
# or
Error: /path/to/json/mypackage is not a folder
```