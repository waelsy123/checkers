export alice=$(checkersd keys show alice -a)
export bob=$(checkersd keys show bob -a)
export alice_priv_key=$(echo yes | checkersd keys export alice --unsafe --unarmored-hex )
export bob_priv_key=$(echo yes | checkersd keys export bob --unsafe --unarmored-hex )
export mockgen_checkers="mockgen -source=x/checkers/types/expected_keepers.go -package testutil -destination=x/checkers/testutil/expected_keepers_mocks.go"
