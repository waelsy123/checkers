export alice=$(checkersd keys show alice -a)
export bob=$(checkersd keys show bob -a)
export alice_priv_key=$(echo yes | checkersd keys export alice --unsafe --unarmored-hex )
export bob_priv_key=$(echo yes | checkersd keys export bob --unsafe --unarmored-hex )
